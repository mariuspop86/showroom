import React, { FC } from 'react'
import Counter from '../components/counter/Counter'

export const Home: FC = () => (
  <section className="container pt-12">
    <div className="text-center mb-12">
      <h1 className="text-xl font-bold">
        React Project Skeleton, Default Version
      </h1>
      <p>
        App generated by using:
        <strong className="bg-primary text-white px-1 ml-2">
          create-react-app --template pi
        </strong>
      </p>
    </div>
    <Counter />
  </section>
)
