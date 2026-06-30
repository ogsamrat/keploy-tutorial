import CopyButton from './CopyButton'

const ROWS = [
  { cmd: 'curl -O -L https://keploy.io/install.sh && source install.sh', what: 'Install the Keploy CLI' },
  { cmd: 'git clone https://github.com/keploy/samples-go.git', what: 'Get the sample apps' },
  { cmd: 'docker compose build', what: 'Pre-build the app (skips the timeout)' },
  { cmd: 'keploy record -c "docker compose up" --container-name "ginMongoApp"', what: 'Record real traffic into tests' },
  { cmd: 'keploy test -c "docker compose up" --container-name "ginMongoApp" --delay 10', what: 'Replay every recorded test' },
]

// Render a command with a shell prompt and the leading binary tinted, so it reads as a real command.
function Command({ cmd }) {
  const space = cmd.indexOf(' ')
  const bin = space === -1 ? cmd : cmd.slice(0, space)
  const rest = space === -1 ? '' : cmd.slice(space)
  return (
    <code className="cheats__cmd">
      <span className="cheats__prompt" aria-hidden="true">$ </span>
      <span className="cheats__bin">{bin}</span>
      {rest}
    </code>
  )
}

export default function Cheatsheet() {
  return (
    <div className="cheats" aria-label="Command cheat sheet">
      <div className="cheats__head">
        <span className="cheats__icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="4 17 10 11 4 5" />
            <line x1="12" y1="19" x2="20" y2="19" />
          </svg>
        </span>
        The whole flow, five commands
      </div>
      <ul className="cheats__list">
        {ROWS.map((r, i) => (
          <li className="cheats__row" key={i}>
            <div className="cheats__cmdline">
              <Command cmd={r.cmd} />
              <CopyButton text={r.cmd} className="cheats__copy" label={`Copy command: ${r.what}`} />
            </div>
            <span className="cheats__what">{r.what}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
