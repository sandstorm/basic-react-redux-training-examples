import React, { useState, useCallback } from 'react'
import { connect } from 'react-redux'

import { RootState, selectors, actions } from 'Redux/Store'

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

type OwnProps = {}

const mapStateToProps = (state: RootState) => ({
  repos: selectors.GithubRepos.getRepos(state),
  loading: selectors.GithubRepos.getLoading(state),
})

const mapDispatchToProps = {
  fetchUserRepos: actions.GithubRepos.fetchRepos
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & OwnProps

const Component = React.memo(({
  repos,
  fetchUserRepos,
  loading,
}: Props) => {
  const [user, setUser] = useState('')

  const handleUserInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget
    setUser(value)
  }, [])

  return (
    <div>
      <h3>Public Github repositories by user</h3>
      <div>
        <input onChange={handleUserInputChange} type='text' value={user} />
      </div>
      { loading
        ? <p>Loading...</p>
        : <ul>
          {renderUserRepositories(repos)}
        </ul>
      }
    </div>
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(Component)
