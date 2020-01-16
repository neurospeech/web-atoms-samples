// tslint:disable
import WebImage from "@web-atoms/core/dist/core/WebImage";

const base64 = ["iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAMAAAC/MqoPAAAC+lBMVEUAAADpjTEUfQrqjTEUfQoUfQrq",
		"jTEUfQkUfQrqjTHpjTEUfQrqjTHp6OjpjTHpjTEUfQnq6enq6enpjTEUfQrp6OjpjTHqjTDqjTETfQkU",
		"fQkUfQoUfQoUfQrrjjEUfQrpjTHp6OgSfAgUfQrqjTETfQnqjTHqjTHqjTHqjTHp6OgUfQrpjTHquY0U",
		"fQoUfQrqjTEUfgnp6OjpjTEUfQoUfQrpjTHq6ekUfQrqjTHb2snpjTHrjjEUfQrp6Ojp6enq6enp6Ojp",
		"6OgUfQoUfQrp6Ojp6Ojp6Ojp6Ojp6Ojp6OgUfQrp6Ojp6Ojv7vPq6enp6OjpjTHpyqujxaDp6Ojp6Ojq",
		"6enp6OjpjTH///8qlCDpjTEUfQrp6OgrlSH/p07/qVIuliT/pUv/qlT/tGj/q1j/r1//rl0tliP/t27/",
		"smX/sWMwlyb/q1b/tWv/rVr/sGEymCgzmSoSfAj/pEn/t3A1miwcHJXoiy6327MgIJcgjxYaGpQeHpYj",
		"I5gmJpo4my7pjDD9/f76+vv/4MH/oUIXF5NDQ6f/4sMUFJHw8Pi63Lb/48YVFZIPD4/l5fMSEpDAwOIo",
		"KJshihf09PrGxuRkZLc9PaWLi8nh4fHa2u5ycr3rkDUnjx0CAoknkh339/zo6PSurtm427Upkx8kkRr0",
		"7vTp7fKxsdsyMp8uLp4ICIwJeACdndIMDI78/PyFhcaBgcR6esHpyarpiSkbhBEWgAwUfgrr6/bPz+mO",
		"jsrynEb/o0UkjRrt7fe6ut94eMBaWrJSUq84OKKhxJ3wlz339vfT0+uzs9xLS6sqKpwehxTw7+9fX7T1",
		"9PTW1uzExOP/5MhWVrC9veCrq9iWls73plTtkzmnp9aIiMh+fsO83blPT632ok7KyuaamtD/5s1mZrdp",
		"abkYgQ6iotSRkcy3t95HR6n/5cr0mkDx8PDc3O9sbLr6qVf4n0Xr6ur8plD8oUj7q1voii3e3vDMzOj8",
		"r2Ht7Oz9smigw5zoyKnoiCb53sP52rvzEKFKAAAAWXRSTlMA7e0R49FEEAkK9PQb6OLNRTQQgXvt05Z5",
		"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"];

export default new WebImage(`data:image/png;base64,${base64.join("")}`);
