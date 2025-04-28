import { Modal } from 'bootstrap';
import * as XLSX from 'xlsx/xlsx.mjs';
import { moduleOpen } from '../tools';
import { Chart } from 'chart.js';

window.normingOpen = function () {
	moduleOpen('./src/html/norming.html').then(() => {
		normingInit();
	});
};

// normingOpen();

function normingInit() {
	normingInitModal();
	normingChartDraw();
    document.getElementById('apply').addEventListener('click', normingApply)
    document.getElementById('download').addEventListener('click', normingDownload)
}

function normingApply(event) {
    const btn = event.target;
    buttonToggleLoading(btn); 
    setTimeout( () => {
        normingChartDraw(document.getElementById('select').value);
        // normingChartDraw('normaRc')
        buttonToggleLoading(btn);
    }, 500);
}

function normingInitModal() {
	window.normingModals = {};
	document.getElementById('modalOpen').addEventListener('click', normingModalOpen);
	window.modalList = {
		normaRc: new Modal(document.getElementById('normaRc')),
		normaTt: new Modal(document.getElementById('normaTt')),
		normаOosRc: new Modal(document.getElementById('normаOosRc')),
		normaOosTt: new Modal(document.getElementById('normaOosTt')),
		normaUs: new Modal(document.getElementById('normaUs')),
		normaAccuracy: new Modal(document.getElementById('normaAccuracy')),
		normaUsRcTt: new Modal(document.getElementById('normaUsRcTt')),
	};
}

function normingModalOpen() {
	const modalValue = document.getElementById('select').value;
	window.modalList[modalValue].toggle();
}

function normingDownload() {
    downloadTable('ассистент_нормирование');
};

function normingChartDraw(value = 'normaRc') {
	const chartCanvas = document.getElementById('chart');

	const chartLabels = [
		'11.01',
		'12.01',
		'13.01',
		'14.01',
		'15.01',
		'16.01',
		'17.01',
		'18.01',
		'19.01',
		'20.01',
		'21.01',
	];

    const chartTitle = {
        normaTt: 'Норма товарного запаса ТТ',
        normaRc: 'Норма товарного запаса РЦ',
        normаOosRc: 'Норма OOS ТТ',
        normaOosTt: 'Норма УС поставщик',
        normaUs: 'Норма OOS РЦ',
        normaUsRcTt: 'Норма УС РЦ-ТТ',
        normaAccuracy: 'Норма точности прогноза',
    }
    
	const chartData = {
		normaTt: [
            {
                label: 'Рег',
                data: [ 7_526_057, 7_536_744, 7_519_518, 7_633_377, 7_532_513, 7_471_367, 7_439_333, 7_635_368, 7_356_560, 7_600_113, 7_727_610 ],
                stack: 'group',
                order: 1,
            },
            {
                label: 'Овер ',
                data: [ 1_850_670, 1_823_406, 1_879_880, 1_877_060, 1_822_382, 1_867_842, 1_829_344, 1_847_266, 1_839_140, 1_868_880, 1_869_583, ],
                stack: 'group',
                order: 1,
            },
            {
                label: 'Промо',
                data: [ 1_850_670, 1_823_406, 1_879_880, 1_877_060, 1_822_382, 1_867_842, 1_829_344, 1_847_266, 1_839_140, 1_868_880, 1_869_583, ],
                stack: 'group',
                order: 1,
            },
            {
                label: 'Вывод',
                data: [ 1_110_402, 972_483, 1_253_253, 1_126_236, 971_937, 1_245_228, 1_097_607, 985_209, 1_226_093, 1_121_328, 997_111, ],
                stack: 'group',
                order: 1,
            },
            {
                label: 'Итого план',
                data: [ 11_104_019, 10_940_435, 11_279_277, 11_262_359, 10_934_293, 11_207_051, 10_976_065, 11_083_598, 11_034_841, 11_213_282, 11_217_498, ],
                type: 'line',
                order: 0,
            },
            {
                label: 'Итого, факт',
                data: [ 12_337_799, 12_156_039, 12_532_530, 12_513_732, 12_149_214, 12_452_279, 12_195_628, 12_315_109, 12_260_934, 12_459_202, 12_463_887, ],
                stack: 'group',
                order: 0,
            },
        ],
		normaRc: [
            {
                label: 'Рег',
                data: [
                    2_508_686,
                    2_512_248,
                    2_506_506,
                    2_544_459,
                    2_510_838,
                    2_490_456,
                    2_479_778,
                    2_545_123,
                    2_452_187,
                    2_533_371,
                    2_575_870,
                ],
                stack: 'group',
                order: 0,
            },
            {
                label: 'Овер',
                data: [
                    616_890,
                    607_802,
                    626_627,
                    625_687,
                    607_461,
                    622_614,
                    609_781,
                    615_755,
                    613_047,
                    622_960,
                    623_194,
                ],
                stack: 'group',
                order: 0,
            },
            {
                label: 'Промо',
                data: [
                    616_890,
                    607_802,
                    626_627,
                    625_687,
                    607_461,
                    622_614,
                    609_781,
                    615_755,
                    613_047,
                    622_960,
                    623_194,
                ],
                stack: 'group',
                order: 0,
            },
            {
                label: 'Вывод',
                data: [
                    370_134,
                    324_161,
                    417_751,
                    375_412,
                    323_979,
                    415_076,
                    365_869,
                    328_403,
                    408_698,
                    373_776,
                    332_370,
                ],
                stack: 'group',
                order: 0,
            },
            {
                label: 'Итого, факт',
                data: [
                    4_112_600,
                    4_052_013,
                    4_177_510,
                    4_171_244,
                    4_049_738,
                    4_150_760,
                    4_065_209,
                    4_105_036,
                    4_086_978,
                    4_153_067,
                    4_154_629,
                ],
                stack: 'group',
                order: 0,
            },
            {
                label: 'Итого, план',
                data: [
                    3_701_340,
                    3_646_812,
                    3_759_759,
                    3_754_120,
                    3_644_764,
                    3_735_684,
                    3_658_688,
                    3_694_533,
                    3_678_280,
                    3_737_761,
                    3_739_166,
                ],
                type: 'line',
                order: 0,
            }
        ],
		normаOosRc: [
            {
                label: '',
                data: []
            },
            {
                label: '',
                data: []
            },
            {
                label: '',
                data: []
            },
            {
                label: '',
                data: []
            },
        ],
		normaOosTt: [
            {
                label: 'Факт, %',
                data: [
                    89,
                    90,
                    91,
                    89,
                    88,
                    91,
                    92,
                    90,
                    89,
                    89,
                    90,
                ]
            },
            {
                label: 'План, %',
                data: [ 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, ]
            },
        ],
		normaUs: [
            {
                label: 'Факт, %',
                data: [ 79, 88, 81, 89, 88, 91, 92, 90, 89, 89, 90, ]
            },
            {
                label: 'План, %',
                data: [ 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, 95, ]
            },
        ],
		normaUsRcTt: [
            {
                label: 'Факт, %',
                data: [ 97, 98, 98, 98, 96, 96, 97, 98, 98, 98, 98, ]
            },
            {
                label: 'План, %',
                data: [ 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, ]
            },

        ],
		normaAccuracy: null,
	};
    console.log(value)
    if (!chartData[value]){
        return
    }

    if (Chart.getChart('chart')) {
		window.normingChart.destroy();
	}

	window.normingChart = new Chart(chartCanvas, {
        type: 'bar',
        data: {
            labels: chartLabels,
            datasets: chartData[value]
        },
        options: {
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                title: {
                    display: true,
                    text: chartTitle[value]
                },
                decimation: {
                    enabled: false,
                },
            },
            scales: {
                x: {
                    display: true,
                    // stacked: true,
                },
                y: {
                    // stacked: true,
                },
            },
        },
    });
}
