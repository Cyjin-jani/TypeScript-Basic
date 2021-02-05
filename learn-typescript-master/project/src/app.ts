// //라이브러리 로딩
// import 변수명 ㄹrom '라이브러리 이름';
// //변수, 함수 임포트 문법
// import {} from '파일 상대 경로';
import axios, { AxiosResponse } from 'axios';
import Chart from 'chart.js'; //특정 라이브러리에 해당하는 부분. (* as를 써야함.)
//이러한 문제는 CommonJs모듈을 ES6모듈의 코드베이스에 사용하는 경우 발생.
//exports =  와 같은 걸 사용하지 않는 한, * as 를 써야 한다.
//만약, 따로 정의한 index.d.ts를 쓴다면 그냥 import Chart from 'chart.js'로 해줘야 함.

//타입 모듈 불러오기
import {
  CountrySummaryResponse,
  CovidSummaryResponse,
  Country,
  CountrySummaryInfo,
} from './covid/index';

// utils 유틸함수 (기존)
// function $(selector: string) {
//   return document.querySelector(selector);
// }
//유틸함수 활용성 높이는 타입정의 (제네릭을 활용한 새로운 방식) +(타입의 기본값을 HTMLDivElement로 정의)
function $<T extends HTMLElement = HTMLDivElement>(selector: string) {
  const element = document.querySelector(selector);
  return element as T;
}
//예시1.
// const temp = $<HTMLParagraphElement>('.abc'); //무슨 타입인지 확실히 명시.
//위에 extends를 통해 HTMLElement 하위 타입만 받도록 하였기 때문에,
//아래와 같이 string과 같은 타입은 넣을 수 없음 (에러발생)
// const temp = $<string>('.abc');
//예시2.
//만약, 위의 제네릭 타입에 기본값을 설정하게 되면 아무것도 제네릭을 넣지 않는 경우,
//위에서 설정한 디폴트 타입인 HTMLDivElement로 타입이 정의된다.
const temp = $('.abc'); //이 temp는 타입추론이 HTMLDivElement로 됨.
//즉, divElement인 경우, 제네릭으로 타입을 따로 넘길 필요가 없음. (활용성)

//....................
//기본적으로 제공해주는 객체 Date같은 경우는 타입스크립트에서 자동적으로 타입 추론이 가능함.
//date에는 그래서 string, number, Date 모두 가능. (유니온)
//본래라면 가능한 타입들을 명시해 주는 것이 좋으나, 일단 여기서는 Date만으로 설정.
function getUnixTimestamp(date: Date | string) {
  return new Date(date).getTime();
}

// DOM
//Dom의 타입 구조체 (큰 순서.)
// var a : Element | HTMLElement | HTMLParagraphElement;
//위 유틸 함수로 인한 반환값이 기본적으로 Element 타입으로 추론되어 있음.
//경우에 맞도록 구체화 된 타입을 단언해준다. (html 파일 참고하여 맞는 하위 Element 타입을 적용.)
const confirmedTotal = $<HTMLSpanElement>('.confirmed-total'); //제네릭을 활용한 구체적 타입정의(new)
//단, 위와 같은 경우의 단점은, 괄호 안의 classname(선택자)에 오탈자가 나는 경우, 제대로 된 Element의 추론이 불가능. (주의)
const deathsTotal = $('.deaths') as HTMLParagraphElement; //타입 단언 활용 (p태그여서 ParagraphElement를 넣음)
const recoveredTotal = $('.recovered') as HTMLParagraphElement;
const lastUpdatedTime = $('.last-updated-time') as HTMLParagraphElement;
//아래 ~~List들은 교육용으로 as를 이용하여 타입단언(타입정의)를 해두지 않고 사용하여
//타입 non-null assertion과 옵셔널 체이닝 오퍼레이터를 활용할 수 있었음.
//다만, 오류가 많으므로 다시 아래와 같이 타입단언을 함.
const rankList = $('.rank-list') as HTMLOListElement;
const deathsList = $('.deaths-list') as HTMLOListElement;
const recoveredList = $('.recovered-list') as HTMLOListElement;
const deathSpinner = createSpinnerElement('deaths-spinner');
const recoveredSpinner = createSpinnerElement('recovered-spinner');

function createSpinnerElement(id: string) {
  const wrapperDiv = document.createElement('div');
  wrapperDiv.setAttribute('id', id);
  wrapperDiv.setAttribute(
    'class',
    'spinner-wrapper flex justify-center align-center'
  );
  const spinnerDiv = document.createElement('div');
  spinnerDiv.setAttribute('class', 'ripple-spinner');
  spinnerDiv.appendChild(document.createElement('div'));
  spinnerDiv.appendChild(document.createElement('div'));
  wrapperDiv.appendChild(spinnerDiv);
  return wrapperDiv;
}

// state
let isDeathLoading = false;

// api
function fetchCovidSummary(): Promise<AxiosResponse<CovidSummaryResponse>> {
  const url = 'https://api.covid19api.com/summary';
  return axios.get(url);
}

//api 문서에 이미 아래 값들이 반환된다고 되어있으므로 enum으로 만들어 둠.
enum CovidStatus {
  Confirmed = 'confirmed',
  Recovered = 'recovered',
  Deaths = 'deaths',
}
function fetchCountryInfo(
  countryName: string | undefined,
  status: CovidStatus
): Promise<AxiosResponse<CountrySummaryResponse>> {
  // status params: confirmed, recovered, deaths
  const url = `https://api.covid19api.com/country/${countryName}/status/${status}`;
  return axios.get(url);
}

// methods
function startApp() {
  setupData();
  initEvents();
}

// events
function initEvents() {
  //null체크를 통해 null이 들어오는 경우 바로 리턴.
  if (!rankList) {
    return;
  }
  //addEventListener의 타입 에러.
  //event: Event를 통해, 이벤트 타입이 들어와야 함 (이전엔 MouseEvent였었으므로 에러)
  rankList.addEventListener('click', handleListClick);
}

//타입 스크립트 내부 위계 관계. (Element와 Event)
// const a: Element
// const b: HTMLElement
// const c: HTMLDivElement

// const evt1: Event
// const evt2: UIEvent
// const evt3: MouseEvent

async function handleListClick(event: Event) {
  let selectedId;
  if (
    event.target instanceof HTMLParagraphElement ||
    event.target instanceof HTMLSpanElement
  ) {
    //null타입 에러 방지 (if문 대신 삼항연산자 사용)
    selectedId = event.target.parentElement
      ? event.target.parentElement.id
      : undefined;
  }
  if (event.target instanceof HTMLLIElement) {
    selectedId = event.target.id;
  }
  if (isDeathLoading) {
    return;
  }
  clearDeathList();
  clearRecoveredList();
  startLoadingAnimation();
  isDeathLoading = true;
  const { data: deathResponse } = await fetchCountryInfo(
    selectedId, //undefined가 들어갈 수 있어서 fetchCountryInfo에 다시 타입정의함.
    CovidStatus.Deaths
  );
  const { data: recoveredResponse } = await fetchCountryInfo(
    selectedId,
    CovidStatus.Recovered
  );
  const { data: confirmedResponse } = await fetchCountryInfo(
    selectedId,
    CovidStatus.Confirmed
  );
  endLoadingAnimation();
  setDeathsList(deathResponse);
  setTotalDeathsByCountry(deathResponse);
  setRecoveredList(recoveredResponse);
  setTotalRecoveredByCountry(recoveredResponse);
  setChartData(confirmedResponse);
  isDeathLoading = false;
}

function setDeathsList(data: CountrySummaryResponse) {
  const sorted = data.sort(
    (a: CountrySummaryInfo, b: CountrySummaryInfo) =>
      getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date)
  );
  sorted.forEach((value: CountrySummaryInfo) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item-b flex align-center');
    const span = document.createElement('span');
    span.textContent = value.Cases.toString();
    span.setAttribute('class', 'deaths');
    const p = document.createElement('p');
    p.textContent = new Date(value.Date).toLocaleDateString().slice(0, -1);
    li.appendChild(span);
    li.appendChild(p);
    //null체크 (if문)
    // if (!deathsList) {
    //   return;
    // }
    //null체크 시
    //타입 Assertion활용 (느낌표를 붙여줌.) non-null assertion
    deathsList!.appendChild(li);
  });
}

function clearDeathList() {
  //null 방지 체크
  if (!deathsList) {
    return;
  }
  deathsList.innerHTML = '';
}

function setTotalDeathsByCountry(data: CountrySummaryResponse) {
  deathsTotal.innerText = data[0].Cases.toString();
}

function setRecoveredList(data: CountrySummaryResponse) {
  const sorted = data.sort(
    (a: CountrySummaryInfo, b: CountrySummaryInfo) =>
      getUnixTimestamp(b.Date) - getUnixTimestamp(a.Date)
  );
  sorted.forEach((value: CountrySummaryInfo) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item-b flex align-center');
    const span = document.createElement('span');
    span.textContent = value.Cases.toString();
    span.setAttribute('class', 'recovered');
    const p = document.createElement('p');
    p.textContent = new Date(value.Date).toLocaleDateString().slice(0, -1);
    li.appendChild(span);
    li.appendChild(p);
    //옵셔널 체이닝 오퍼레이터 (물음표 = ?) 활용.
    recoveredList?.appendChild(li); //null이 아닌 경우에만 appendChild를 함.
    // 위 물음표 (옵셔널 체이닝 오퍼레이터)의 뜻.
    // if(recoveredList === null || recoveredList === undefined) {
    //   return;
    // } else {
    //   recoveredList.appendChild(li);
    // }
  });
}

function clearRecoveredList() {
  recoveredList.innerHTML = '';
}

function setTotalRecoveredByCountry(data: CountrySummaryResponse) {
  recoveredTotal.innerText = data[0].Cases.toString();
}

function startLoadingAnimation() {
  deathsList.appendChild(deathSpinner);
  recoveredList.appendChild(recoveredSpinner);
}

function endLoadingAnimation() {
  deathsList.removeChild(deathSpinner);
  recoveredList.removeChild(recoveredSpinner);
}

async function setupData() {
  const { data } = await fetchCovidSummary();
  setTotalConfirmedNumber(data);
  setTotalDeathsByWorld(data);
  setTotalRecoveredByWorld(data);
  setCountryRanksByConfirmedCases(data);
  setLastUpdatedTimestamp(data);
}

function renderChart(data: number[], labels: string[]) {
  const lineChart = $('#lineChart') as HTMLCanvasElement;
  const ctx = lineChart.getContext('2d') as CanvasRenderingContext2D;
  Chart.defaults.global.defaultFontColor = '#f5eaea';
  Chart.defaults.global.defaultFontFamily = 'Exo 2';
  new Chart(ctx, {
    type: 'line',
    data: {
      labels,
      datasets: [
        {
          label: 'Confirmed for the last two weeks',
          backgroundColor: '#feb72b',
          borderColor: '#feb72b',
          data,
        },
      ],
    },
    options: {},
  });
}

function setChartData(data: CountrySummaryResponse) {
  const chartData = data
    .slice(-14)
    .map((value: CountrySummaryInfo) => value.Cases);
  const chartLabel = data
    .slice(-14)
    .map((value: CountrySummaryInfo) =>
      new Date(value.Date).toLocaleDateString().slice(5, -1)
    );
  renderChart(chartData, chartLabel);
}

function setTotalConfirmedNumber(data: CovidSummaryResponse) {
  confirmedTotal.innerText = data.Countries.reduce(
    (total: number, current: Country) => (total += current.TotalConfirmed),
    0
  ).toString(); //innterText때문에 문자로 바꾸어주어야 함.
}

function setTotalDeathsByWorld(data: CovidSummaryResponse) {
  deathsTotal.innerText = data.Countries.reduce(
    (total: number, current: Country) => (total += current.TotalDeaths),
    0
  ).toString();
}

function setTotalRecoveredByWorld(data: CovidSummaryResponse) {
  recoveredTotal.innerText = data.Countries.reduce(
    (total: number, current: Country) => (total += current.TotalRecovered),
    0
  ).toString();
}

function setCountryRanksByConfirmedCases(data: CovidSummaryResponse) {
  const sorted = data.Countries.sort(
    (a: Country, b: Country) => b.TotalConfirmed - a.TotalConfirmed
  );
  sorted.forEach((value: Country) => {
    const li = document.createElement('li');
    li.setAttribute('class', 'list-item flex align-center');
    li.setAttribute('id', value.Slug);
    const span = document.createElement('span');
    span.textContent = value.TotalConfirmed.toString();
    span.setAttribute('class', 'cases');
    const p = document.createElement('p');
    p.setAttribute('class', 'country');
    p.textContent = value.Country;
    li.appendChild(span);
    li.appendChild(p);
    rankList.appendChild(li);
  });
}

function setLastUpdatedTimestamp(data: CovidSummaryResponse) {
  lastUpdatedTime.innerText = new Date(data.Date).toLocaleString();
}

startApp();
