import React, { useState } from 'react';
import { connect } from 'react-redux'

import { RootState, selectors, actions } from 'Redux/Store/index'


const mapStateToProps = (state: RootState) => ({
  loading: selectors.GithubRepos.getLoading(state),
  userRepos: selectors.GithubRepos.getRepos(state),
})

const mapDispatchToProps = {
  fetchRepos: actions.GithubRepos.fetch,
}

type OwnProps = { }
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps & OwnProps

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

const GithubRepoList = (props: Props) => {
  const [user, setUser] = useState('')

  const handleUserInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser(e.currentTarget.value)
    props.fetchRepos({ user: e.currentTarget.value })
  }

  return (
    <div>
      <h3>Public Github repositories by user</h3>
      <div>
        <input onChange={handleUserInputChange} type='text' value={user} />
      </div>
      { props.loading
        ? <p>Loading...</p>
        : (
          <ul>
            {renderUserRepositories(props.userRepos)}
          </ul>
        )
      }
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(GithubRepoList))

