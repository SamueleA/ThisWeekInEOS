import React from 'react';

class Affiliates extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
  }

  render() {
    return <div className = 'text-justify affiliates'>
      <h2>Recommended Products</h2>
      <p>Below are a list of products I personally recommend for my fellow blockchain addicts :P</p>
        <ul>
          <li>
            <p>Mastering bitcoin is an amazing book to learn the technical details on which bitcoin operates. Highly recommended!</p>
            <a target="_blank"  href="https://www.amazon.com/gp/product/1491954388/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=1491954388&linkCode=as2&tag=thisweekineos-20&linkId=8771436c15af724866b452b8e1e7674a"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=1491954388&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL160_&tag=thisweekineos-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=thisweekineos-20&l=am2&o=1&a=1491954388" width="1" height="1" border="0" alt="" style={{border:'none !important', margin:'0px !important'}} />
            <div><a href='https://amzn.to/2JIIsbB' target='_blank'>Buy Mastering Bitcoin!</a></div>
          </li>

          <li>
            <p>The Book of Satoshi contains the collected writings of Satoshi Nakamoto. It is as cool as it sounds!</p>
            <a target="_blank"  href="https://www.amazon.com/gp/product/0996061312/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=0996061312&linkCode=as2&tag=thisweekineos-20&linkId=b8e83f7b13b3f87b01f7fd258c5c6d42"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=0996061312&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL160_&tag=thisweekineos-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=thisweekineos-20&l=am2&o=1&a=0996061312" width="1" height="1" border="0" alt="" style={{border:'none !important', margin:'0px !important'}} />
            <div><a href='https://amzn.to/2LVc5mp' target='_blank'>Buy The Book of Satoshi!</a></div>
          </li>

          <li>
            <p>I have a Nano Ledger S and I love it. If you have money invested in cryptocurrencies, you need a hardware wallet. NEVER keep your crypto in exchanges susceptible to hacking!!</p>
            <a target="_blank"  href="https://www.amazon.com/gp/product/B01J66NF46/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B01J66NF46&linkCode=as2&tag=thisweekineos-20&linkId=fddf50147b69304fec1e92d4b616ec72"><img border="0" src="//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01J66NF46&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL160_&tag=thisweekineos-20" /></a><img src="//ir-na.amazon-adsystem.com/e/ir?t=thisweekineos-20&l=am2&o=1&a=B01J66NF46" width="1" height="1" border="0" alt="" style={{border:'none !important', margin:'0px !important'}} />
            <div><a href='https://amzn.to/2MxFwfG' target='_blank'>Buy Nano Ledger S!</a></div>
          </li>
        </ul>
    </div>
  }

}

export default Affiliates;
