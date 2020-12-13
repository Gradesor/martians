import DashBoardStore from '../../Store/DashBoard/'

export  const init = ()=> {
	const wsEnviroment = new WebSocket('ws://77.223.104.90:8080/environment');
	wsEnviroment.onmessage = (message) => { DashBoardStore.onmessage(message) };
	DashBoardStore.websoket = wsEnviroment;

	DashBoardStore.websoket.onopen = () => {
		setTimeout(function () {
			DashBoardStore.websoket.send(JSON.stringify({ method: '123' }));
		}, 300)
	}
	const wsSoil = new WebSocket('ws://77.223.104.90:8080/soil');
	wsSoil.onmessage = (message) => { DashBoardStore.onmessageSoil(message) };
	DashBoardStore.websoketSoil = wsSoil;

	DashBoardStore.websoketSoil.onopen = () => {
		setTimeout(function () {
			DashBoardStore.websoketSoil.send(JSON.stringify({ method: '123' }));
		}, 300)
	}
	return false
}