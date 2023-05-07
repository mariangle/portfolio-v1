import { useState, useEffect } from "react";
import React from 'react'
import { Container } from "./styles/styles";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faExternalLink } from "@fortawesome/free-solid-svg-icons";

function formatDate(date) {
    const format = { year: "numeric", month: 'short' };
    return new Date(date).toLocaleDateString('us-US', format);
}

function formatName(name) {
    const formattedName = name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" "); 
    
    return formattedName;
}

function Archive() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepositories = async () => {
          const response = await fetch("https://api.github.com/users/mariangle/repos");
          const repositories = await response.json();
      
          const languages = await Promise.all(repositories.map(async (repo) => {
            const languageResponse = await fetch(repo.languages_url);
            const languageData = await languageResponse.json();
            return Object.keys(languageData);
          }));
      
          const reposWithLanguages = repositories.map((repo, index) => {
            return {
              ...repo,
              languages: languages[index]
            };
          });
      
          setRepos(reposWithLanguages);
        };
      
        fetchRepositories();
      }, []);


  return (
    <StyledArchive>
        <h2>Archive</h2>
        <table>
            <thead>
                <tr>
                    <th>Created at</th>
                    <th>Name</th>
                    <th>Languages</th>
                    <th>Teck stack</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                {repos.length === 0 ? <div>Loading...</div> : repos  
                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                .map((repo, index) => (
                    <tr key={index}>   
                        <td>{formatDate(repo.created_at)}</td>         
                        <td>{formatName(repo.name)}</td>
                        <td>
                            {repo.languages?.map((language, index) => (
                                <span key={index}>{language}</span>
                            ))}
                        </td>
                        <td>
                            {repo.topics?.map((language, index) => (
                                <span key={index}>{language}</span>
                            ))}
                        </td>
                        <td>
                            <a href={repo.html_url} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon></a>
                            {repo.homepage && <a href={repo.homepage} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faExternalLink}></FontAwesomeIcon></a>}
                        </td>
                    </tr>   
                ))}
            </tbody>
        </table>
    </StyledArchive>

  )
}

const StyledArchive = styled(Container)`
max-width: 1600px;
flex-direction: column;
table{
    width: 100%;
    font-size: 0.9rem;
}
th, td{
    padding: 0.5rem;
}
th{
    text-align: left;
    color: var(--color-text);
}
td{
    span, a{
        margin-right: 1rem;
        color: var(--color-header);
    }
}
td:first-child{
    font-family: var(--font-mono);
    color: var(--color-main);
}
`

export default Archive