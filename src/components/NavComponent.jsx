import React from 'react'
import { Link } from 'react-router-dom'

export default function NavComponent({setCategory}) {
    const handleCategoryChange = (category) => {
        setCategory(category);
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <span className="navbar-brand" >NEWS Portal</span>
                    
                    <button className="navbar-toggler btn btn-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link  to='/business' className="nav-link" onClick={() => handleCategoryChange('business')}>Business News</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                News Topics
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link to='/science' onClick={() => handleCategoryChange('science')} className='dropdown-item'>Science</Link>
                                    </li>
                                    <li>
                                        <Link to='/tech' className="dropdown-item" onClick={() => handleCategoryChange('technology')}>Technology</Link>
                                    </li>
                                    <li>
                                        <Link to='/sports' className="dropdown-item" onClick={() => handleCategoryChange('sports')}>Sports</Link>
                                    </li>
                                    <li>
                                        <Link to='/nation' className="dropdown-item" onClick={() => handleCategoryChange('nation')}>Nation</Link>
                                    </li>
                                    <li>
                                        <Link to='/entertainment' className="dropdown-item" onClick={() => handleCategoryChange('entertainment')}>Entertainment</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
