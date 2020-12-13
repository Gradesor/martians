import { extendObservable } from 'mobx'

class ChatsStore {
	websoket:any;
	environmentIndic: any;
	soilIndic: any;
	websoketSoil: any;
	constructor() {
		extendObservable(this, {
			environmentIndic: null,
			soilIndic: null,
			websoket: null,
			websoketSoil: null,
		})
	}
	onmessage(event:any) {
		
		const message = JSON.parse(event.data);
		if (message.params){

			this.environmentIndic = JSON.stringify(message.params.data.result)
		}	
	}
	onmessageSoil(event: any) {
		const message = JSON.parse(event.data);
		if (message.params) {
			this.soilIndic = JSON.stringify(message.params.data.result)
		}	
		console.log(message)
	}

}

const store = new ChatsStore()
export default store
