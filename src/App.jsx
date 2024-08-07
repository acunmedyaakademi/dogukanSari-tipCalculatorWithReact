import './App.css'

function App() {

  return (
    <>
      <div className="container">
        <Header />
        <Calc />
      </div>
    </>
  )
}

function Header() {
  return(
    <div className="header">
      <img src="/images/SPLITTER.svg" alt=""/>
    </div>
  )
}

function Calc() {
  return(
    <div className="calc">
      <CalcBill />
      <CalcTip />
    </div>
  )
}

function CalcBill() {
  return(
    <div className="calcBill">
    <div className="omer">
      <p>Hesap</p>
      <p className="hata"></p>
    </div>
    <input type="number" name="bill" placeholder="$" required className="tip"/>
    <p>Bahşiş %'sini seçin</p>
    <div className="selectTip">
      <button>5</button>
      <button>10</button>
      <button>15</button>
      <button>25</button>
      <button>50</button>
      <form className="customer">
        <input name="cust" placeholder="CUSTOM" className="custom"/>
      </form>
    </div>
    <div className="omer">
      <p>İnsanların sayısı</p>
      <p className="uyari"></p>
    </div>
    <input type="number" name="people" placeholder="👤" className="peoples"/>
  </div>
  )
}

function CalcTip() {
  return(
    <div className="calcTip">
      <div className="calcTipBox">
        <div className="calcTipText">
          <h4>Bahşiş Tutarı</h4>
          <p>/ kişi</p>
        </div>
        <div className="amount">
          <h3 className="peopleOfTip">$0</h3>
        </div>
      </div>
      <div className="calcTipBox mb">
        <div className="calcTipText">
          <h4>Bahşiş Tutarı</h4>
          <p>/ kişi</p>
        </div>
        <div className="amount">
          <h3 className="totalTip">$0</h3>
        </div>
      </div>
      <button className="res">RESET</button>
    </div>
  )
}

export default App
