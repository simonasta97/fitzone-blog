import ScrollToTop from "react-scroll-up";

export default function ScrollUp(){
    return(
        <ScrollToTop showUnder={160}>
            <div className="scrollup">
                <i className="fa fa-chevron-up"></i>
            </div>
        </ScrollToTop>
    );
}