
export function SignInView() {
    return (
        <section>
            <h1>This is a Sing In View</h1>
            <form>
                <label>
                    Your name 
                    <input
                        name='name'
                        value=''
                    />
                </label>
                <label>
                    Your E-mail
                    <input
                        name='email'
                        value=''
                        type='email'
                    />
                </label>
                <label>
                    Create password
                    <input
                        name='password'
                        value=''
                        type='password'
                    />
                </label>
                <button type='submit'>Sign In</button>
            </form>
        </section>
    )
}