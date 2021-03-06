
const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const Container = CompLibrary.Container;
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const GridBlock = CompLibrary.GridBlock;
const translate = require('../../server/translate.js').translate;

const CWD = process.cwd();

const siteConfig = require(`${CWD}/siteConfig.js`);

class Contact extends React.Component {
  render() {
    let language = this.props.language || '';
    const mailingLists = [
      {
        email: 'users@pulsar.incubator.apache.org',
        desc: 'User-related discussions',
        subscribe: 'mailto:users@pulsar.incubator.apache.org',
        unsubscribe: 'mailto:users-unsubscribe@pulsar.incubator.apache.org',
        archives: 'http://mail-archives.apache.org/mod_mbox/incubator-pulsar-users/'
      },
      {
        email: 'dev@pulsar.incubator.apache.org',
        desc: 'Development-related discussions',
        subscribe: 'mailto:dev@pulsar.incubator.apache.org',
        unsubscribe: 'mailto:dev-unsubscribe@pulsar.incubator.apache.org',
        archives: 'http://mail-archives.apache.org/mod_mbox/incubator-pulsar-dev/'
      },
      {
        email: 'dev@pulsar.incubator.apache.org',
        desc: 'All commits to the Pulsar repository',
        subscribe: 'mailto:commits-subscribe@pulsar.incubator.apache.org',
        unsubscribe: 'mailto:commits-unsubscribe@pulsar.incubator.apache.org',
        archives: 'http://mail-archives.apache.org/mod_mbox/incubator-pulsar-commits/'
      }
    ]

    return (
      <div className="docMainWrapper wrapper">
        <Container className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1><translate>Contact</translate></h1>
              <hr />
            </header>
            <p>
            There are many ways to get help from the Apache Pulsar community.
            The mailing lists are the primary place where all Pulsar committers are present.
            Bugs and feature requests can either be discussed on the dev mailing list or
            by opening an issue on
            <a href="https://github.com/apache/incubator-pulsar/" target="_blank">GitHub</a>.
            </p>

            <h2><translate>Mailing Lists</translate></h2>
            <table className="versions">
              <thead>
                <tr>
                  <th><translate>Name</translate></th>
                  <th><translate>Scope</translate></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {mailingLists.map(
                  list => (
                      <tr key={list.email}>
                        <td>{list.email}</td>
                        <td>{list.desc}</td>
                        <td><a href={list.subscribe}><translate>Subscribe</translate></a></td>
                        <td><a href={list.unsubscribe}><translate>Unsubscribe</translate></a></td>
                        <td><a href={list.archives}><translate>Archives</translate></a></td>
                      </tr>
                    )
                )}
              </tbody>
            </table>

            <h2><translate>Slack</translate></h2>
            <p><translate>There is a Pulsar slack channel that is used for informal discussions for devs and users.</translate></p>

            <p><translate>The Slack instance is at </translate><a href="https://apache-pulsar.slack.com/" target="_blank">
                    https://apache-pulsar.slack.com/</a></p>

            <p><translate>You can self-register at </translate><a href="https://apache-pulsar.herokuapp.com/" target="_blank">
                    https://apache-pulsar.herokuapp.com/</a></p>
          </div>
        </Container>
      </div>
    );
  }
}

module.exports = Contact;
