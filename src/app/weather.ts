export class Weather {
  constructor(
	public coord: {},
	public weather: any[],
	public base: string,
	public main: {},
	public wind: {},
	public rain: {},
	public clouds: {},
	public dt: number,
	public sys: {},
	public id: number,
	public name: string,
	public cod: number) { }
}