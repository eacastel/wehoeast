import addToMailchimp from "gatsby-plugin-mailchimp"
import React from "react"


export default class MailChimpFormTwo extends React.Component {
    state = {
        name: null,
        email: null,
    }

    _handleChange = e => {
        console.log({
            [`${e.target.name}`]: e.target.value,
        })
        this.setState({
            [`${e.target.name}`]: e.target.value,
        })
    }

    _handleSubmit = e => {
        e.preventDefault()

        console.log('submit', this.state)

        addToMailchimp(this.state.email, this.state)
            .then(({ msg, result }) => {
                console.log('msg', `${result}: ${msg}`)

                if (result !== 'success') {
                    throw msg
                }
                alert(msg)
            })
            .catch(err => {
                console.log('err', err)
                alert(err)
            })
    }
    render() {
        return (
            <div>
                <form onSubmit={this._handleSubmit}>
                <div className="flex justify-center lg:justify-start mt-8">
                    <input
                        type="email"
                        onChange={this._handleChange}
                        placeholder="enter-your@email.com"
                        name="email"
                        className="border-grey-400 border-2 rounded-lg p-4 mt-1 block w-3/5 shadow-sm"
                        autoComplete="email"
                    />
                 </div>
           
                    <br />
                    <input type="submit" className="               
                        bg-tmagenta
                        hover:bg-tyellow
                        rounded
                        text-white
                        font-medium
                        py-3 px-8
                        lg:py-4 lg:px-12
                        xl:py-5 xl:px-16 xl:text-lg"
                        />
                </form>
            </div>
        )
    }
}

