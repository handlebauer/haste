export async function getStdin() {
  if (process.stdin.isTTY) {
    return null
  }

  const result = []
  let length = 0

  for await (const chunk of process.stdin) {
    result.push(chunk)
    length += chunk.length
  }

  return Buffer.concat(result, length).toString().trim()
}
