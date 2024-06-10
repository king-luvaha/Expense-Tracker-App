import React from 'react'

function Hero() {
  return (
    <div>
        <section className="bg-gray-50 flex items-center flex-col">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Manage Your Money.
                        <strong className="font-extrabold text-primary sm:block"> Simplify Your Spending. </strong>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed">
                        Track your expenses effortlessly, gain insights into your spending habits, and achieve your financial goals with our user-friendly expense tracker.
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                        className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-yellow-600 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                        href="/sign-in"
                        >
                        Get Started
                        </a>
                    </div>
                </div>
            </div>

        </section>
    </div>
  )
}

export default Hero