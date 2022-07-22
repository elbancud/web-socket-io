/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-50">
        <body class="h-full">
        ```
      */}
      <div className='min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-md w-full space-y-8'>
          <div>
            <iframe
              src='https://giphy.com/embed/wZ5kPbU0TXScE'
              width='150'
              height='150'
              frameBorder='0'
              className='giphy-embed m-auto'></iframe>

            <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
              Welcome to the socket.
            </h2>
            <p className='mt-2 text-center text-sm text-gray-600'>
              Let's see if shit works here.
            </p>
          </div>
          <form className='mt-8 flex justify-center' action='#' method='POST'>
            <input type='hidden' name='remember' defaultValue='true' />
            <div className='rounded-md shadow-sm -space-y-px w-100 inlin'>
              <div>
                <label htmlFor='email-address' className='sr-only'>
                  Message
                </label>
                <input
                  id='email-address'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  className='appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                  placeholder='Aa'
                />
              </div>
            </div>

            <div>
              <button
                type='submit'
                className='group relative w-full flex justify-center py-2 px-2 border border-transparent text-sm font-medium rounded-md'>
                <span className='rotate-90'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    viewBox='0 0 20 20'
                    fill='red'>
                    <path d='M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z' />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
