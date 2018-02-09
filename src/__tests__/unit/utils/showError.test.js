import showError from 'utils/showError'
import swal from 'sweetalert'
jest.mock('sweetalert')

describe('showError', () => {
  it('shows errors', () => {
    const error = new Error('An error name')
    error.data = 'Some error data'

    showError(error)

    expect(swal).toHaveBeenCalledWith(error.name, error.data, 'error')
  })
})
