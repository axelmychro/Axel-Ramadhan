var nav = {
	home: "beranda",
	projects: "projects",
	about: "tentang",
	timeline: "garis waktu",
	contact: "hubungi"
};
var section = {
	home: {
		txt: "selamat datang~",
		card: {
			greeting: "hei di sana, namaku...",
			bio: "mahasiswa ilmu komputer, programmer autodidak, penikmat Vue / Nuxt"
		}
	},
	projects: {
		txt: "yang sudah kubuat sejauh ini"
	},
	about: {
		txt: "rasa ingin tahu itu berbahaya, mungkin..",
		me: {
			title: "Aku",
			subtitle: "Axel Ramadhan",
			description: "Mahasiswa tahun pertama ilmu komputer, programmer autodidak, dan junior frontend developer. Aku buat website pakai Vue / Nuxt. Seringkali ngoding sambil dengerin MCR."
		},
		philosophy: {
			title: "Filosofi",
			subtitle: "Tajam & jelas",
			description: "Warna kontras, font gampang dibaca, elemen secukupnya supaya kamu bisa fokus ke layar. Buat fitur yang jelas-jelas aja. Filosofi ini sangat pas dengan model komponen di Vue.",
			reason: "Aku suka komponen yang terpisah. Workspace yang lebih kecil dan terfokus membuat proses debugging jauh lebih efisien daripada struktur yang gede."
		},
		style: {
			title: "Style",
			subtitle: "Referensi Visual",
			description: "Berikut material dan referensi yang aku pake di sini.",
			colours: {
				primary: "A",
				secondary: "B",
				main_background: "BG1",
				sub_background: "BG2"
			},
			fonts: {
				title: "judul",
				section: "section",
				paragraph: "paragraf",
				code: "kode",
				jp: "カタカナ"
			}
		}
	},
	timeline: {
		txt: "waktu berlalu tanpa bisa dihindari,",
		august: {
			name: "Agustus",
			description: "Mulai kuliah di Universitas Sumatera Utara"
		},
		october: {
			name: "Oktober",
			description: "Terpilih oleh GDGoC USU sebagai member Web Development Pathway"
		}
	},
	contact: {
		txt: "wah, kamu sampe sini!"
	}
};
const id = {
	nav: nav,
	section: section
};

export { id as default, nav, section };
//# sourceMappingURL=id.mjs.map
