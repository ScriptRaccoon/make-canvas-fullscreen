/**
 * Utility to make an HTML canvas fullscreen, regardless of window size.
 * @param {HTMLCanvasElement} canvas HTML canvas element
 * @param {(() => void)} [callback] (optional) callback function to be executed after size adjustment (for example, to set colors and transforms).
 */

export function make_fullscreen(canvas, callback = () => {}) {
	if (!canvas) return;
	canvas.style.display = "block";
	document.body.style.margin = "0";
	adjust_canvas();

	window.addEventListener("resize", adjust_canvas);

	function adjust_canvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		callback();
	}
}
