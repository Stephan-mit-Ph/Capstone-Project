import { about } from '../../data/about'

export default function Preview() {
  return (
    <>
      {about.map((about) => (
        <p key={about.text}>{about.text}</p>
      ))}
    </>
  )
}
