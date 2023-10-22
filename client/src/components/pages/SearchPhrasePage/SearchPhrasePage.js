import { useParams } from "react-router-dom";
import AdsSearchList from "../../features/AdsSearchList/AdsSearchList";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAllOffers } from "../../../redux/adsRedux";
import Search from "../../features/Search/Search";

const SearchResults = () => {
  const { searchPhrase } = useParams();
  const [status, setStatus] = useState("loading"); //loading, success, noMatchs
  const ads = useSelector(getAllOffers);
  const [searchAds, setSearchAds] = useState([]);

  useEffect(() => {
    const filteredAds = ads.filter((ad) =>
      ad.title.toLowerCase().includes(searchPhrase.toLowerCase())
    );
    setSearchAds(filteredAds);
    setStatus("success");
    if ((searchAds.length = 0)) {
      setStatus("noMatchs");
    }
  }, [ads, searchPhrase]);

  return (
    <div>
      <Search />
      {status === "loading" && (
        <Spinner key="spinner" animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {searchAds ? <AdsSearchList ads={searchAds} /> : <div>Hi</div>}
    </div>
  );
};
export default SearchResults;