import Header from "~/component/Layout/HeaderOnly";


function HeaderOnly({children}) {
    return ( 
        <div>
            <Header/>
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
     );
}
    
export default HeaderOnly;