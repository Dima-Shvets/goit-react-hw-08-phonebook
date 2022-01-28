
export function LogInView() {
    return (
        <section>
            <h1>This is a login view!</h1>
            <form>
                <label>
                    E-mail
                    <input
                        name='email'
                        value=''
                        type='email'
                    />
                </label>
                <label>
                    Password
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