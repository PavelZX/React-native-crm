d attach auth
d exec vk

docker exec -it vk /bin/bash

type Root {
  users(limit: Int = 10, sort: String = "asc" ): [User]!
}

type Bar implements Foo {
  is_foo: Boolean
  is_bar: Boolean
}



// add user name - localStorage?


// client.query({
//   query: gql`
//     query AllLinks {
//       allLinks {
//         id
//       }
//     }
//   `
// }).then(response => console.log(response.data.allLinks))

// export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' }) (LinkList)
// this.props.history.push(`/new/1`)

// networkInterface.use([{
//   applyMiddleware(req, next) {
//     if (!req.options.headers) {
//       req.options.headers = {}
//     }
//     const token = localStorage.getItem(GC_AUTH_TOKEN)
//     req.options.headers.authorization = token ? `Bearer ${token}` : null
//     next()
//   }
// }])



// // 923019474
// // 65s2dt


// const CREATE_USER_MUTATION = gql`
//   mutation CreateUserMutation($name: String!, $email: String!, $password: String!) {
//     createUser(
//       name: $name,
//       authProvider: {
//         email: {
//           email: $email,
//           password: $password
//         }
//       }
//     ) {
//       id
//     }

//     signinUser(email: {
//       email: $email,
//       password: $password
//     }) {
//       token
//       user {
//         id
//       }
//     }
//   }
// `

// const SIGNIN_USER_MUTATION = gql`
//   mutation SigninUserMutation($email: String!, $password: String!) {
//     signinUser(email: {
//       email: $email,
//       password: $password
//     }) {
//       token
//       user {
//         id
//       }
//     }
//   }
// `

// export default compose(
//   graphql(CREATE_USER_MUTATION, { name: 'createUserMutation' }),
//   graphql(SIGNIN_USER_MUTATION, { name: 'signinUserMutation' })
// )(Login)


// // export default graphql(ClientListQuery, { options: { pollInterval: 5000 } })(List)


// export default compose(
//   graphql(clientQuery, {
//     options: (props) => ({ variables: { id: props.match.params.id } })
//   }),
//   graphql(clientUpdate, {
//     name: "clientUpdate"
//   }),
// )(Update)


// export default graphql(
//   // signinUser, {name: 'signinUser'})
//   // (graphql(userQuery, { options: { fetchPolicy: 'network-only' }})
//   // (withRouter(CreateLogin))
// )

// // node_modules/.bin/sequelize migration:create
// // node_modules/.bin/sequelize db:migrate
// // node_modules/.bin/sequelize db:migrate:old_schema
// // node_modules/.bin/sequelize db:migrate:undo
// // node_modules/.bin/sequelize db:migrate:undo:all
// // node_modules/.bin/sequelize db:seed:create
// // node_modules/.bin/sequelize seed:generate
// // node_modules/.bin/sequelize db:seed:undo
// // node_modules/.bin/sequelize db:seed:undo:all
// // node_modules/.bin/sequelize help:db:seed
// // node_modules/.bin/sequelize --require ./babelhook db:seed:all
// // // ---
// // node_modules/.bin/sequelize migration:create
// // node_modules/.bin/sequelize db:seed:create
// // node_modules/.bin/sequelize db:migrate
// // node_modules/.bin/sequelize db:seed:all
// // node_modules/.bin/sequelize help:migration:create
// // sequelize help:<task-name>

// // db:migrate: "node_modules/.bin/sequelize db:migrate --migrations-path=db/migrations"
// // db:migration "node_modules/.bin/sequelize migration:create --migrations-path=db/migrations"
// // db:seed "node_modules/.bin/sequelize db:seed:all --seeders-path=db/seeders"
// // db:drob "rm -rf db/database.dev.sqlite"


// // npm install -g node-inspector@0.7.4
// // https://www.npmjs.com/package/node-inspector

// // // models.Tag.findAll({
// // //   include: [
// // //     { model: models.User }, // load all pictures
// // //     // { model: Picture, as: 'ProfilePicture' }, // load the profile picture. Notice that the spelling must be the exact same as the one in the association
// // //   ]
// // // }).then(response => {

// // //   console.log(response)
// // // })

// // // models.User.findAll().then(response => {
// // //   console.log(response)
// // // })


// // // Player.belongsTo(Team)
// // // Player.belongsTo(Team)

// // // m.Book.hasMany(m.Article, {through: 'book_articles'})
// // // m.Article.hasMany(m.Books, {through: 'book_articles'})

// // // this.Comment = this.sequelize.define('comment', {
// // //   title: Sequelize.STRING,
// // //   commentable: Sequelize.STRING,
// // //   commentable_id: Sequelize.INTEGER
// // // })

// // // this.Comment.prototype.getItem = function() {
// // //   return this['get' + this.get('commentable').substr(0, 1).toUpperCase() + this.get('commentable').substr(1)]()
// // // }

// // // console.log(111)

// // // User.hasMany(User, {
// // //   foreignKey: 'taggable_id',
// // //   constraints: false,
// // //   // scope: {
// // //   //   commentable: 'tag'
// // //   // }
// // // })

// // // User.belongsTo(Tag, {
// // //   foreignKey: 'taggable_id',
// // //   constraints: false,
// // //   as: 'tag'
// // // })

// // // Tag.hasMany(User, {
// // //   foreignKey: 'taggable_id',
// // // })



// (function(R) {
//     var incomplete = R.filter(R.where({complete: false}));
//     var sortByDate = R.sortBy(R.prop('dueDate'));
//     var sortByDateDescend = R.compose(R.reverse, sortByDate);
//     var importantFields = R.project(['title', 'dueDate']);
//     var groupByUser = R.partition(R.prop('username'));
//     var activeByUser = R.compose(groupByUser, incomplete);
//     var gloss = R.compose(importantFields, R.take(5), sortByDateDescend);
//     var topData = R.compose(gloss, incomplete);
//     var topDataAllUsers = R.compose(R.mapObj(gloss), activeByUser);
//     var byUser = R.use(R.filter).over(R.propEq("username"));

//     log("Gloss for Scott:");
//     log(topData(byUser("Scott", tasks)));
//     log("====================");
//     log("Gloss for everyone:");
//     log(topDataAllUsers(tasks));
// }(ramda));

// const R = require('ramda');
// const prop = R.prop;
// const path = R.path;
// const curry = R.curry;

// const Maybe = require('ramda-fantasy').Maybe;

// const getURLForUser = (user) => {
//   return Maybe(user)
//     .map(path(['prefs', 'languages', 'primary']))
//     .chain(maybeGetUrl)
// }

// const maybeGetUrl = R.curry((allUrls, language) => {
//     return Maybe(allUrls[language]);
// })(indexURLs)

// function boot(user, defaultURL) {
//   showIndexPage( getURLForUser(user).getOrElse(defaultURL) )
// }

// //'[[http://site.com/sp']];;
// boot(joeUser, "http://site.com/en")




// // DEFAULT ROUTE
// import { AsyncRouter } from 'express-async-router'
// import Settings from "config/settings"
// import Clients from './clients'

// // import GraphqlApi from "./graphql_api"

// // grahpql
// import bodyParser from 'body-parser'
// import {
//   graphqlExpress,
//   graphiqlExpress,
// } from 'graphql-server-express'

// import { schema } from 'api/resourses/schema'
// // grahpql


// export default (context) => {
//   const app = context.app
// 	const api = AsyncRouter()

//   api.all('/', () => ({
//     servise: "crm_servise",
//     version: 'current version /v2 with graphql' })
//   )

//   // api.all('/', () => ({ version: 'current version /v2', servise: "crm servise" }) )

//   api.use('/v1/clients', Clients)

//   context.app.use('/', api)

//   // context.app.use('/graphql', GraphqlApi)


//   // grahpql
//   api.use('/v2/graphql', bodyParser.json(), graphqlExpress({
//     schema
//   }))

//   api.use('/v2/graphiql', graphiqlExpress({
//     endpointURL: '/v2/graphql'
//   }))
//   // grahpql



//   catch_404_and_forward_to_error_handler(app)
//   development_error_handler_will_print_stacktrace(app)
//   production_error_handler_no_stacktraces_leaked_to_user(app)
// }

// const catch_404_and_forward_to_error_handler = (app) => {
//   app.use((req, res, next) => {
//     var err = new Error('Not Found')
//     err.status = 404
//     next(err)
//   })
// }

// const development_error_handler_will_print_stacktrace = (app) => {
//   if (Settings.env == 'development') {
//     app.use((err, req, res, next) => {
//       res.status(err.status || 500)
//       res.json({"error": err.message})
//     })
//   }
// }

// const production_error_handler_no_stacktraces_leaked_to_user = (app) => {
//   app.use((err, req, res, next) => {
//     airbrake.notify(err)
//     res.status(err.status || 500)
//     res.render('error', {
//       message: err.message,
//       error: err,
//     })
//   })
// }


//       await clientDelete({
//         variables: { id: object.id },
//         update: (store, { data: { submitComment } }) => {
//           const data = store.readQuery({ query: clientsQuery });
//           data.clients = filter((o) => { return o.id !== object.id}, data.clients)
//           store.writeQuery({ query: clientsQuery, data });
//         },
//       })


import React from 'react';
import { graphql } from 'react-apollo';
import RepoInfo from './RepoInfo';
import classNames from 'classnames';
import gql from 'graphql-tag';
import { Link } from 'react-router';

function Loading() {
  return (
    <div>Loading...</div>
  );
}

function VoteButtons({ canVote, score, onVote, vote }) {
  const buttonClasses = classNames('btn', 'btn-score', {
    invisible: !canVote,
  });

  function submitVote(type) {
    const voteValue = {
      UP: 1,
      DOWN: -1,
    }[type];

    onVote(vote.vote_value === voteValue ? 'CANCEL' : type);
  }

  return (
    <span>
      <button
        className={classNames(buttonClasses, { active: vote.vote_value === 1 })}
        onClick={() => submitVote('UP')}
      ><span className="glyphicon glyphicon-triangle-top" aria-hidden="true"></span></button>
      <div className="vote-score">{score}</div>
      <button
        className={classNames(buttonClasses, { active: vote.vote_value === -1 })}
        onClick={() => submitVote('DOWN')}
      ><span className="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span></button>
      &nbsp;
    </span>
  );
}

VoteButtons.propTypes = {
  canVote: React.PropTypes.bool,
  score: React.PropTypes.number,
  onVote: React.PropTypes.func,
  vote: React.PropTypes.object,
};


function FeedEntry({ entry, currentUser, onVote }) {
  const repoLink = `/${entry.repository.full_name}`;

  return (
    <div className="media">
      <div className="media-vote">
        <VoteButtons
          canVote={!!currentUser}
          score={entry.score}
          vote={entry.vote}
          onVote={(type) => onVote({
            repoFullName: entry.repository.full_name,
            type,
          })}
        />
      </div>
      <div className="media-left">
        <a href="#">
          <img
            className="media-object"
            style={{ width: '64px', height: '64px' }}
            src={entry.repository.owner.avatar_url}
            role="presentation"
          />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">
          <a href={entry.repository.html_url}>
            {entry.repository.full_name}
          </a>
        </h4>
        <RepoInfo
          description={entry.repository.description}
          stargazers_count={entry.repository.stargazers_count}
          open_issues_count={entry.repository.open_issues_count}
          created_at={entry.createdAt}
          user_url={entry.postedBy.html_url}
          username={entry.postedBy.login}
        >
          <Link to={repoLink}>
            View comments ({entry.commentCount})
          </Link>
        </RepoInfo>
      </div>
    </div>
  );
}

FeedEntry.propTypes = {
  onVote: React.PropTypes.func,
  currentUser: React.PropTypes.object,
  entry: React.PropTypes.object,
};

function FeedContent({ entries = [], currentUser, onVote, onLoadMore }) {
  if (entries && entries.length) {
    return (
      <div> {
        entries.map((entry) => (
          !!entry ? <FeedEntry
            key={entry.repository.full_name}
            entry={entry}
            currentUser={currentUser}
            onVote={onVote}
          /> : null
        ))
      }
        <a onClick={onLoadMore}>Load more</a>
      </div>
    );
  }
  return <div />;
}

FeedContent.propTypes = {
  entries: React.PropTypes.array,
  currentUser: React.PropTypes.object,
  onVote: React.PropTypes.func,
  onLoadMore: React.PropTypes.func,
};

class Feed extends React.Component {
  constructor() {
    super();
    this.offset = 0;
  }

  render() {
    const { vote, loading, currentUser, feed, fetchMore } = this.props;

    return (
      <div>
        <FeedContent
          entries={feed || []}
          currentUser={currentUser}
          onVote={vote}
          onLoadMore={fetchMore}
        />
        {loading ? <Loading /> : null}
      </div>
    );
  }
}

Feed.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  currentUser: React.PropTypes.object,
  feed: React.PropTypes.array,
  fetchMore: React.PropTypes.func,
  vote: React.PropTypes.func.isRequired,
};

const FEED_QUERY = gql`
  query Feed($type: FeedType!, $offset: Int, $limit: Int) {
    # Eventually move this into a no fetch query right on the entry
    # since we literally just need this info to determine whether to
    # show upvote/downvote buttons
    currentUser {
      login
    }
    feed(type: $type, offset: $offset, limit: $limit) {
      createdAt
      commentCount
      score
      id
      postedBy {
        login
        html_url
      }
      vote {
        vote_value
      }
      repository {
        name
        full_name
        description
        html_url
        stargazers_count
        open_issues_count
        created_at
        owner {
          avatar_url
        }
      }
    }
  }
`;

const ITEMS_PER_PAGE = 10;
const FeedWithData = graphql(FEED_QUERY, {
  options(props) {
    return {
      variables: {
        type: (
          props.params &&
          props.params.type &&
          props.params.type.toUpperCase()
        ) || 'TOP',
        offset: 0,
        limit: ITEMS_PER_PAGE,
      },
      forceFetch: true,
    };
  },
  props({ data: { loading, feed, currentUser, fetchMore } }) {
    return {
      loading,
      feed,
      currentUser,
      fetchMore() {
        return fetchMore({
          variables: {
            offset: feed.length,
          },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult.data) { return prev; }
            return Object.assign({}, prev, {
              feed: [...prev.feed, ...fetchMoreResult.data.feed],
            });
          },
        });
      },
    };
  },
})(Feed);

const VOTE_MUTATION = gql`
  mutation vote($repoFullName: String!, $type: VoteType!) {
    vote(repoFullName: $repoFullName, type: $type) {
      score
      id
      vote {
        vote_value
      }
    }
  }
`;

const FeedWithDataAndMutations = graphql(VOTE_MUTATION, {
  name: 'vote',
})(FeedWithData);

export default FeedWithDataAndMutations;








// import { store } from 'store'
// import { changePerPage } from 'actions'


// console.log(store)




// store.dispatch(changePerPage(1))
// console.log(store.getState())

// store.dispatch(changePerPage(2))
// console.log(store.getState())

// store.dispatch(changePerPage(3))
// console.log(store.getState())


// // import { Content } from 'shared/components'

// import { combineReducers, createStore } from 'redux'
// // import { createStore } from 'redux'

// function counter(state = 0, action) {
//   switch (action.type) {
//   case 'INCREMENT':
//     return state + 1
//   case 'DECREMENT':
//     return state - 1
//   default:
//     return state
//   }
// }

// let store = createStore(counter)

// store.subscribe(() =>
//   console.log(store.getState())
// )

// // Единственный способ изменить внутреннее состояние - это вызвать действие
// // Действия могут быть сериализированы, залогированы или сохранены и далее воспроизведены.
// store.dispatch({ type: 'INCREMENT' })
// // 1
// store.dispatch({ type: 'INCREMENT' })
// // 2
// store.dispatch({ type: 'DECREMENT' })
// // 1




// function visibilityFilter(state = 'SHOW_ALL', action) {
//   switch (action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return action.filter
//     default:
//       return state
//   }
// }

// function todos(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           text: action.text,
//           completed: false
//         }
//       ]
//     case 'COMPLETE_TODO':
//       return state.map((todo, index) => {
//         if (index === action.index) {
//           return Object.assign({}, todo, {
//             completed: true
//           })
//         }
//         return todo
//       })
//     default:
//       return state
//   }
// }

// let reducer = combineReducers({ visibilityFilter, todos })
// // let store = createStore(reducer)

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

function fetchSecretSauce() {
  return fetch('https://www.google.com/search?q=secret+sauce');
}

// These are the normal action creators you have seen so far.
// The actions they return can be dispatched without any middleware.
// However, they only express “facts” and not the “async flow”.

function makeASandwich(forPerson, secretSauce) {
  return {
    type: 'MAKE_SANDWICH',
    forPerson,
    secretSauce
  };
}

function apologize(fromPerson, toPerson, error) {
  return {
    type: 'APOLOGIZE',
    fromPerson,
    toPerson,
    error
  };
}

function withdrawMoney(amount) {
  return {
    type: 'WITHDRAW',
    amount
  };
}

// Even without middleware, you can dispatch an action:
store.dispatch(withdrawMoney(100));

// But what do you do when you need to start an asynchronous action,
// such as an API call, or a router transition?

// Meet thunks.
// A thunk is a function that returns a function.
// This is a thunk.

function makeASandwichWithSecretSauce(forPerson) {

  // Invert control!
  // Return a function that accepts `dispatch` so we can dispatch later.
  // Thunk middleware knows how to turn thunk async actions into actions.

  return function (dispatch) {
    return fetchSecretSauce().then(
      sauce => dispatch(makeASandwich(forPerson, sauce)),
      error => dispatch(apologize('The Sandwich Shop', forPerson, error))
    );
  };
}

// Thunk middleware lets me dispatch thunk async actions
// as if they were actions!

store.dispatch(
  makeASandwichWithSecretSauce('Me')
);

// It even takes care to return the thunk’s return value
// from the dispatch, so I can chain Promises as long as I return them.

store.dispatch(
  makeASandwichWithSecretSauce('My wife')
).then(() => {
  console.log('Done!');
});

// In fact I can write action creators that dispatch
// actions and async actions from other action creators,
// and I can build my control flow with Promises.

function makeSandwichesForEverybody() {
  return function (dispatch, getState) {
    if (!getState().sandwiches.isShopOpen) {

      // You don’t have to return Promises, but it’s a handy convention
      // so the caller can always call .then() on async dispatch result.

      return Promise.resolve();
    }

    // We can dispatch both plain object actions and other thunks,
    // which lets us compose the asynchronous actions in a single flow.

    return dispatch(
      makeASandwichWithSecretSauce('My Grandma')
    ).then(() =>
      Promise.all([
        dispatch(makeASandwichWithSecretSauce('Me')),
        dispatch(makeASandwichWithSecretSauce('My wife'))
      ])
    ).then(() =>
      dispatch(makeASandwichWithSecretSauce('Our kids'))
    ).then(() =>
      dispatch(getState().myMoney > 42 ?
        withdrawMoney(42) :
        apologize('Me', 'The Sandwich Shop')
      )
    );
  };
}

// This is very useful for server side rendering, because I can wait
// until data is available, then synchronously render the app.

store.dispatch(
  makeSandwichesForEverybody()
).then(() =>
  response.send(ReactDOMServer.renderToString(<MyApp store={store} />))
);

// I can also dispatch a thunk async action from a component
// any time its props change to load the missing data.

import { connect } from 'react-redux';
import { Component } from 'react';

class SandwichShop extends Component {
  componentDidMount() {
    this.props.dispatch(
      makeASandwichWithSecretSauce(this.props.forPerson)
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.forPerson !== this.props.forPerson) {
      this.props.dispatch(
        makeASandwichWithSecretSauce(nextProps.forPerson)
      );
    }
  }

  render() {
    return <p>{this.props.sandwiches.join('mustard')}</p>
  }
}

export default connect(
  state => ({
    sandwiches: state.sandwiches
  })
)(SandwichShop);

/**
 * @param {string} s1 Исходная строка
 * @param {string} s2 Сравниваемая строка
 * @param {object} [costs] Веса операций { [replace], [replaceCase], [insert], [remove] }
 * @return {number} Расстояние Левенштейна
 */
function levenshtein(s1, s2, costs) {
    var i, j, l1, l2, flip, ch, chl, ii, ii2, cost, cutHalf;
    l1 = s1.length;
    l2 = s2.length;

    costs = costs || {};
    var cr = costs.replace || 1;
    var cri = costs.replaceCase || costs.replace || 1;
    var ci = costs.insert || 1;
    var cd = costs.remove || 1;

    cutHalf = flip = Math.max(l1, l2);

    var minCost = Math.min(cd, ci, cr);
    var minD = Math.max(minCost, (l1 - l2) * cd);
    var minI = Math.max(minCost, (l2 - l1) * ci);
    var buf = new Array((cutHalf * 2) - 1);

    for (i = 0; i <= l2; ++i) {
        buf[i] = i * minD;
    }

    for (i = 0; i < l1; ++i, flip = cutHalf - flip) {
        ch = s1[i];
        chl = ch.toLowerCase();

        buf[flip] = (i + 1) * minI;

        ii = flip;
        ii2 = cutHalf - flip;

        for (j = 0; j < l2; ++j, ++ii, ++ii2) {
            cost = (ch === s2[j] ? 0 : (chl === s2[j].toLowerCase()) ? cri : cr);
            buf[ii + 1] = Math.min(buf[ii2 + 1] + cd, buf[ii] + ci, buf[ii2] + cost);
        }
    }
    return buf[l2 + cutHalf - flip];
}

var diff = levenshtein('Hello', 'Hellaaaaaa');
console.log(diff)



// def distance(a, b):
//     "Calculates the Levenshtein distance between a and b."
//     n, m = len(a), len(b)
//     if n > m:
//         # Make sure n <= m, to use O(min(n,m)) space
//         a, b = b, a
//         n, m = m, n

//     current_row = range(n+1) # Keep current and previous row, not entire matrix
//     for i in range(1, m+1):
//         previous_row, current_row = current_row, [i]+[0]*n
//         for j in range(1,n+1):
//             add, delete, change = previous_row[j]+1, current_row[j-1]+1, previous_row[j-1]
//             if a[j-1] != b[i-1]:
//                 change += 1
//             current_row[j] = min(add, delete, change)

//     return current_row[n]

