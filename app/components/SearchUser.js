var React = require( "react");
var CreateReactClass = require('create-react-class');
var GitHubUser = require('../services/GitHubUser');

var SearchUser = CreateReactClass({
    handleSubmit: function(e){
        e.preventDefault(); 

        GitHubUser.getByUsername(this.refs.username.value).then(function(response){
            this.props.updateUser(response.data);
            console.log(response);
        }.bind(this));

        GitHubUser.getReposByUsername(this.refs.username.value).then(function(response){
            this.props.updateRepos(response.data);
            console.log(response);
        }.bind(this));
    },
    render: function(){
        return(
            <div className="jumbotron">
                <h1>GitHub Info</h1>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" 
                                ref="username"
                                className="form-control"
                                placeholder="Ex: Cyntia"
                                />
                        </div>
                        <button 
                            type="submit"
                            className="btn btn-primary">Buscar
                        </button>
                    </form>
                </div>
            </div>
        );
    }
});
module.exports = SearchUser;