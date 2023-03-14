import MeImg from '../assets/me.png'

export default function Presentation() {
    return (
        <>


            <div className='apresent-style'>

                <div className='apresent-container'>
                    <div className='photo-container'>

                        <div className='container-description'>
                            <h1>Prazer em conhecê-lo! <br></br>Eu sou, </h1>

                            <h1 className='style-nick'>Ariel Nicollas.</h1>
                        </div>
                        <div className='style-photo'>
                            <img src={MeImg} alt="" />
                        </div>

                    </div>
                </div>



            </div>

        </>
    )
}