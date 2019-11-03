import React, { useState, useRef, useEffect } from 'react';
import {debounce} from 'lodash/fp'

type Props = {
}

type Repository = {
  id: string
  name: string
  html_url: string
}

const renderUserRepositories = (repositories: Repository[] = []) => repositories
  .map(repo =>(
    <li key={repo.id}>
      <a href={repo.html_url}>{repo.name}</a>
    </li>
  ))

const fetchUserRepos = async (user: string) => {
  const response = await fetch(`https://api.github.com/users/${user}/repos`)
  if (response.ok) {
    return await response.json()
  } else {
    throw new Error('Something went wrong...')
  }
}

const GithubRepoList = React.memo(() => {
  const [user, setUser] = useState('')
  const [userRepos, setUserRepositories] = useState<Repository[]>([])

  // We debounce because we can only make 60/requests per hour being an unauthorized github user
  // We also need to use useRef() here to keep a mutable instance of our debounce function
  // Otherwise we would get a new function on every render which would break our debouncing ;)
  const debouncedFetch = useRef<typeof fetchUserRepos>()

  // Here we make sure, that our debounced function is created exactly once
  useEffect(() => {
    debouncedFetch.current = debounce(
      500,
      (user: string) => fetchUserRepos(user)
        .then((response) => setUserRepositories(response))
        .catch((error) => console.log(error))
    )
  },[])

  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUserValue = e.currentTarget.value
    setUser(newUserValue)

    if (debouncedFetch.current && newUserValue.length > 2) {
      debouncedFetch.current(newUserValue)
    }
  }

  return (
    <div>
      <h3>Public Github repositories by user</h3>
      <div>
        <input onChange={handleUserInputChange} type='text' value={user} />
      </div>
      <ul>
        {renderUserRepositories(userRepos)}
      </ul>
    </div>
  );
})

export default GithubRepoList;

