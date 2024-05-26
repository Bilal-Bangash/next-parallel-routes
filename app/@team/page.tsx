import { delay } from '@/lib/util'

async function Team() {
  await delay(3000)
  return (
    <div className="h-96 flex-1 rounded-xl bg-pink-800 p-10 text-white">
      <h1 className="text-3xl font-semibold">Team</h1>
    </div>
  )
}

export default Team
