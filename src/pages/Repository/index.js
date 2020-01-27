import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import api from "../../services/api";
import Container from "../../Components/Container/styles";
import { Loading, Owner, IssueList } from "./styles";

export default class Repository extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        repository: PropTypes.string
      })
    }).isRequired
  };
  state = {
    repository: {},
    issues: [],
    loading: true
  };
  async componentDidMount() {
    const { match } = this.props;
    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: "open",
          per_page: 5
        }
      })
    ]);
    this.setState({
      loading: false,
      repository: repository.data,
      issues: issues.data
    });
    console.log(this.state.repository);
    console.log(this.state.issues);
  }
  render() {
    const { repository, issues, loading } = this.state;
    if (loading) {
      return (
        <Loading>
          <FaSpinner color="#FFF" size={50} />
        </Loading>
      );
    }
    return (
      <Container>
        <Owner>
          <Link to="/">Voltar aos Repositórios </Link>
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <h1>{repository.name}</h1>
          <p>{repository.description}</p>
        </Owner>
        <IssueList>
          {issues.map(issue => (
            <li key={String(issue.key)}>
              <img src={issue.user.avatar_url} alt={issue.user.login} />
              <div>
                <strong>
                  <a href={issue.html_url}>{issue.title}</a>
                  {issue.labels.map(label => (
                    <span key={String(label.id)}>{label.name}</span>
                  ))}
                </strong>
                <p>{issue.user.login}</p>
              </div>
            </li>
          ))}
        </IssueList>
      </Container>
    );
  }
}
