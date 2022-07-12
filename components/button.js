import Link from 'next/link'

export function Button(props) {
  return (
    <Link href={props.link}>
      <a target="_blank">
        <button className="btn-primary">{props.name}</button>
      </a>
    </Link>
  )
}
