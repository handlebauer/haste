const { HASTE_SERVER } = process.env

/**
 * @param {string} data
 */
export async function postData(data) {
  const url = new URL(`${HASTE_SERVER}/documents`)
  const response = await fetch(url, { method: 'post', body: data })

  if (response.ok === false) {
    throw new Error(
      `Fetch to ${url} failed: ${response.status} (${response.statusText})`
    )
  }

  const { key } = await response.json()
  return `${HASTE_SERVER}/${key}`
}
