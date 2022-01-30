import s from './Container.module.scss'

export function Container ({children}) {
    return (
        <div className={s.Container}>
            {children}
        </div>
    )
}