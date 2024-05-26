import { delay } from '@/lib/util'

async function Settings() {
  await delay(5000)
  return (
    <div className="h-96 flex-1 rounded-2xl bg-purple-800 p-10 text-white">
      <h1 className="text-3xl font-semibold">Settings</h1>
    </div>
  )
}

export default Settings
