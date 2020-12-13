import DashBoardStore from '../../Store/DashBoard/'

export const init = ()=> {
	const wsEnviroment = new WebSocket('ws://77.223.104.90:8080/environment');
	if (!DashBoardStore.websoket){
		wsEnviroment.onmessage = (message) => { DashBoardStore.onmessage(message) };
		DashBoardStore.websoket = wsEnviroment;
	
		DashBoardStore.websoket.onopen = () => {
			setTimeout(function () {
				DashBoardStore.websoket.send(JSON.stringify({ method: '123' }));
			}, 100)
		}
	}

	const wsSoil = new WebSocket('ws://77.223.104.90:8080/soil');
	if (!DashBoardStore.websoketSoil) {
		wsSoil.onmessage = (message) => { DashBoardStore.onmessageSoil(message) };
		DashBoardStore.websoketSoil = wsSoil;

		DashBoardStore.websoketSoil.onopen = () => {
			setTimeout(function () {
				DashBoardStore.websoketSoil.send(JSON.stringify({ method: '123' }));
			}, 100)
		}
	}
	const wsWater = new WebSocket('ws://77.223.104.90:8080/water');
	if (!DashBoardStore.websoketWater) {
		wsWater.onmessage = (message) => { DashBoardStore.onmessageWater(message) };
		DashBoardStore.websoketWater = wsWater;

		DashBoardStore.websoketWater.onopen = () => {
			setTimeout(function () {
				DashBoardStore.websoketWater.send(JSON.stringify({ method: '123' }));
			}, 100)
		}
	}
	return false
}