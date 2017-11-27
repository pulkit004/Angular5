export class CounterService{
	activeToInactiveCounter = 0;
	inactiveToActiveCounter = 0;

	increamentActiveToInactive() {
		this.activeToInactiveCounter++;
		console.log('Active to Inactive' + this.activeToInactiveCounter);
	}
	increamentInactiveToActive() {
		this.inactiveToActiveCounter++;
		console.log('Inactive to Active' + this.inactiveToActiveCounter);
	}
}