import { Application, Graphics } from 'pixi.js'

async function main() {
  const app = new Application()

  await app.init({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x1a1a2e,
    resolution: window.devicePixelRatio || 1,
    autoDensity: true,
  })

  document.body.appendChild(app.canvas)

  window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight)
  })

  const player = new Graphics()
  player.rect(0, 0, 32, 32).fill(0xe94560)
  player.x = app.screen.width / 2
  player.y = app.screen.height / 2
  app.stage.addChild(player)

  const keys: Record<string, boolean> = {}
  window.addEventListener('keydown', e => keys[e.key] = true)
  window.addEventListener('keyup',   e => keys[e.key] = false)

  const speed = 200

  app.ticker.add((ticker) => {
    const dt = ticker.deltaTime / 60
    if (keys['w'] || keys['ArrowUp'])    player.y -= speed * dt
    if (keys['s'] || keys['ArrowDown'])  player.y += speed * dt
    if (keys['a'] || keys['ArrowLeft'])  player.x -= speed * dt
    if (keys['d'] || keys['ArrowRight']) player.x += speed * dt
  })
}

main()