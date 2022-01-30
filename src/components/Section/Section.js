import s from './Sections.module.scss';

export function Section({children}) {
    return (
        <section className={s.section}>{children}</section>
    )
}