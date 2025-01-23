import React, { Fragment } from 'react'
import { Logo } from './logo'
import Nav from './Nav'
import Media from 'react-media';
export const Header = () => {

    return (
        <div className='w-full md:h-40 sm:h-52 sticky bg-dark-background mx-auto bg-blue-950'>
            <div style={{ marginBlock: "0px" }} className="sm:mx-auto sm:w-3/4 md:w-full relative container h-full flex sm:justify-center md:justify-between items-center flex-wrap shadow-sm">
                <Logo />
                <Media queries={{
                    small: "(max-width: 669px)",
                    taiwindcssMediaQueries: "(min-width: 670px)"
                }}>
                    {matches => (<Fragment>{matches.small && <p>tap here</p>}
                        {matches.taiwindcssMediaQueries && <Nav />}</Fragment>)}
                </Media>

            </div>
        </div>
    )
}
