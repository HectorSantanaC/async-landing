const API = 'https://yh-finance.p.rapidapi.com/auto-complete?q=BTC&region=ES'

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2798a8efd5msh92d7afc3f955d12p1a5875jsnf864116fedbb',
		'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async () => {
    try {
        const info = await fetchData(API);
        let view = `
            ${info.news.map(notice => `
                <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${notice.thumbnail.resolutions[0].url}" alt="${notice.publisher}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${notice.title}
                    </h3>
                </div>
                </div>
            `).slice(0,4).join('')}
            `;
            content.innerHTML = view;
    } catch (error) {
        window.alert('Error de conexión a la API');
        console.log(error);
    }
})();