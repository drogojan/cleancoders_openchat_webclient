import APIError from 'domain/APIError'

describe('APIError', () => {
  it('has a proper name and description', () => {
    const response = {
      config: {
        url: `${process.env.REACT_APP_API_URL}users`,
        method: 'post'
      },
      data: { message: 'Username already in use.' }
    }
    const error = new APIError(response)

    expect(error.name).toBe(response.data.message)
    expect(error.message).toBe(`POST /api/users`)
  })
})
