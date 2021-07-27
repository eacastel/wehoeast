import addToMailchimp from 'gatsby-plugin-mailchimp'
import React from 'react'


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
                <div className="flex justify-center mt-8">
                <label for="sub-email" className="absolute ml-2 text-left  text-gray-500 mt-2">Email Address:</label>
                    <input
                        id="sub-email"
                        type="email"
                        onChange={this._handleChange}
                        name="email"
                        className=" block w-3/5 border-gray-500 border-2 rounded-lg h-16 text-center shadow-sm pl-3 pt-4"
                        autoComplete="email"   
                    />
                 </div>
           
                    <div className="pt-5">
                        <input type="submit" value="Submit" className="
                            cursor-pointer               
                            bg-tmagenta
                            hover:bg-tyellow
                            rounded
                            text-white
                            hover:text-black
                            font-medium
                            py-3 px-8
                            lg:py-4 lg:px-12
                            xl:py-5 xl:px-16 xl:text-lg"
                            />
                    </div>
                </form>
            </div>
        )
    }
}

