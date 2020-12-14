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
                <div className="flex justify-center lg:justify-start mt-8 w-auto">
                    
                    <input
                        type="email"
                        onChange={this._handleChange}
                        name="email"
                        className="border-tmagenta border-2 rounded-md h-16 w-4/5 mt-1 text-center md:text-left shadow-sm pl-3 pt-5"
                        autoComplete="email"
                    />
                        <label htmlFor="email" className="absolute ml-2 text-left  text-tmagenta mt-2">Email Address:</label>

                                        
                    
                 </div>
           
                    <div className="mt-5">
                        <input type="submit" className="
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

