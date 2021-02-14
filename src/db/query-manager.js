import faunadb from 'faunadb';
const q = faunadb.query;
const {
    Create,
    Collection,
    Get,
    Index,
    Login,
    Logout,
    Match,
    Ref
} = q

class QueryManager {
    constructor(token) {
        this.bootstrapToken = token || process.env.REACT_APP_FAUNADB_LOGOUT;
        this.client = new faunadb.Client({
            secret: token || process.env.REACT_APP_FAUNADB_LOGOUT
        })
    }

    async login(email, password) {
        let res = await this.client.query(
            Login(
                Match( Index("users_by_email"), email), 
                { password: password }
            )
        )
        .then(res => {
            this.client = new faunadb.Client({ secret: res.secret });
            return res;
        })
        .catch(e => {
            console.log('Error retrieving user...', e)
            return false;
        })

        let user = res && await this.client.query(
            Get(Ref(Collection('users'), res.instance.value.id))
        )
        return user;

    }

    register(email, password, first, last){
        return this.client.query(
            Create(
                Collection('users'), {
                    credentials: { password: password },
                    data: {
                        email: email,
                        firstName: first,
                        lastName: last
                    }
                }
            )
        )
        .then(res => {
            // console.log(res);
            // this.client = new faunadb.Client({ secret: res.secret.secret });
            return res;
        })

    }

    logout(){
        return this.client.query(
            Logout(true)
        )
        .then(res => {
            this.client = new faunadb.Client({
                secret: this.bootstrapToken
            })
            return res;
        })
    }
}

const faunaQueries = new QueryManager();
export { faunaQueries, QueryManager };