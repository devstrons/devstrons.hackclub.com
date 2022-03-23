import Page from '@/components/Page'
import styles from '@/styles/home-page.module.scss'
import type { NextPage } from 'next'
import Image from 'next/image'
import React from 'react'

const HomePage: NextPage = () => {
  return (
    <Page title="Home">
      <div className="flex h-screen overflow-y-auto bg-slate-900">
        <section className="m-auto flex flex-col items-center gap-4">
          <div className="relative -mb-8 h-40 w-40 shrink-0">
            <Image src="/assets/waving-devtrons-icon.gif" layout="fill" />
          </div>
          <div className="">
            <h1 data-text="DEVSTRONS'" className={styles['water-effect']} />
          </div>
          <div className="">
            <p className="mb-8 divide-x-2 text-2xl leading-none text-slate-300 sm:text-3xl">
              <span className="inline-block px-4 uppercase transition-all hover:text-[1.1em] hover:text-sky-500">
                Learn
              </span>
              <span className="inline-block px-4 uppercase transition-all text-sky-500 hover:text-[1.1em] hover:text-white">
                Code
              </span>
              <span className="inline-block px-4 uppercase transition-all hover:text-[1.1em] hover:text-sky-500">
                Tron
              </span>
            </p>
          </div>
          <div className="flex gap-4">
            <a
              className="block rounded-md border-2 border-transparent bg-sky-500 px-4 py-2 text-center text-slate-800 transition-colors hover:border-current hover:bg-slate-900 hover:text-slate-50"
              href="https://dsc.gg/devstrons"
              rel="noopener noreferrer"
              target="_blank">
              Join Discord <i className="fa-solid fa-user-group ml-1" />
            </a>
            <a
              className="block rounded-md border-2 border-transparent bg-sky-500 px-4 py-2 text-center text-slate-800 transition-colors hover:border-current hover:bg-slate-900 hover:text-slate-50"
              href="https://devstrons.bio.link"
              rel="noopener noreferrer"
              target="_blank">
              Follow Us <i className="fa-solid fa-shuttle-space ml-1" />
            </a>
          </div>
        </section>
      </div>
    </Page>
  )
}

export default HomePage
