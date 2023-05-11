import { useState, useEffect } from "react";
import React from 'react'
import { Container } from "../styles/styles";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeBranch, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { Technologies } from "../styles/styles";
import { formatName, formatDate } from "../util/useUtil"

function Archive() {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepositories = async () => {
          const response = await fetch("https://api.github.com/users/mariangle/repos");
          const repositories = await response.json();
      
          setRepos(repositories);
        };
      
        fetchRepositories();
      }, []);

  return (
    <StyledArchive>
        <div>
            <h2>Archive</h2>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Created</th>
                    <th>Name</th>
                    <th>Built with</th>
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
                            <Technologies>
                            {repo.topics?.map((language, index) => (
                                <li key={index}>{language}</li>
                            ))}
                            </Technologies>
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
max-width: 1200px;
flex-direction: column;
div{
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 2rem;
}
table{
    width: 100%;
    font-size: 0.8rem;
}
th, td{
    padding: 0.5rem;
}
th{
    text-align: left;
    color: var(--color-header);
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