function Website(){
    return(
    <>
        <div className='head'>
            <h1>
                My App
            </h1>
            <nav>
                <li>
                    <ul>home</ul>
                    <ul>pricing</ul>
                    <ul>contact</ul>
                </li>
            </nav>
        </div>
        <div className="sec">
            <h2>Simple and Affordable Pricing</h2>
            <p>
                choose a plan that works best for you and your team,
                upgrade or degrade anytime.
            </p>
        </div>
        <div className="thr">
        <h2>Pricing Plans</h2>
        <div className="comp">
            <div className="comps">
                <h2>Basic</h2>
                <p id='price'>$999 / month</p>
                <div className="list">
                    <ol>5 users</ol>
                    <ol>20 projects</ol>
                    <ol>Priority Support</ol>
                </div>
                <button>Choose Plan</button>
            </div>
            
            <div className="comps">
                <h4>most popular</h4>
                <h2>Standard</h2>
                <p id='price'>$999 / month</p>
                <div className="list">
                    <ol>5 users</ol>
                    <ol>20 projects</ol>
                    <ol>Priority Support</ol>
                </div>
                <button>Choose Plan</button>
            </div>
            
            <div className="comps">
                <h2>Premium</h2>
                <p id='price'>$999 / month</p>
                <div className="list">
                    <ol>5 users</ol>
                    <ol>20 projects</ol>
                    <ol>Priority Support</ol>
                </div>
                <button>Choose Plan</button>
            </div>
            </div>
        </div>
        <footer>
            <p>&copy; MyApp All Rights reserved</p>
        </footer>
    </>
    );
}
export default Website