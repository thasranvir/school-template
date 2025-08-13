(function () {
	'use strict';

	document.addEventListener('DOMContentLoaded', function () {
		setCurrentYear();
		setupNavToggle();
		loadAnnouncements();
		loadEvents();
		setupNewsletterForm();
	});

	window.addEventListener('load', function () {
		if ('serviceWorker' in navigator) {
			navigator.serviceWorker.register('./sw.js').catch(function () {});
		}
	});

	function setCurrentYear() {
		var yearContainer = document.querySelector('[data-year]');
		if (yearContainer) {
			yearContainer.textContent = String(new Date().getFullYear());
		}
	}

	function setupNavToggle() {
		var toggle = document.querySelector('.nav-toggle');
		var nav = document.getElementById('primary-nav');
		if (!toggle || !nav) return;
		toggle.addEventListener('click', function () {
			var isOpen = nav.classList.toggle('open');
			toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
		});
	}

	function fetchJSONWithFallback(url, fallback) {
		return fetch(url, { cache: 'no-store' })
			.then(function (res) { return res.ok ? res.json() : Promise.reject(); })
			.catch(function () { return fallback; });
	}

	function loadAnnouncements() {
		var container = document.querySelector('[data-announcements]');
		if (!container) return;
		var fallback = [
			{ title: 'Welcome back!', body: 'Classes resume on Monday. Please check your timetable.', date: '2025-09-01', type: 'info' },
			{ title: 'PTA Meeting', body: 'Parents and teachers meeting this Friday at 5 PM in the auditorium.', date: '2025-08-29', type: 'success' },
			{ title: 'Safety Drill', body: 'Campus-wide drill scheduled for Wednesday. Follow staff instructions.', date: '2025-08-27', type: 'alert' }
		];
		fetchJSONWithFallback('./assets/data/announcements.json', fallback).then(function (items) {
			container.innerHTML = '';
			items.slice(0, 6).forEach(function (item) {
				container.appendChild(renderAnnouncement(item));
			});
		});
	}

	function renderAnnouncement(item) {
		var li = document.createElement('li');
		var date = document.createElement('time');
		date.dateTime = item.date;
		try { date.textContent = new Date(item.date).toLocaleDateString(); } catch (e) { date.textContent = item.date; }
		var title = document.createElement('h3');
		title.textContent = item.title;
		var body = document.createElement('p');
		body.textContent = item.body;
		var label = document.createElement('span');
		label.className = 'label ' + (item.type || 'info');
		label.textContent = (item.type || 'Info').toString().replace(/\b\w/g, function (m) { return m.toUpperCase(); });
		li.appendChild(label);
		li.appendChild(title);
		li.appendChild(body);
		li.appendChild(date);
		return li;
	}

	function loadEvents() {
		var container = document.querySelector('[data-events]');
		if (!container) return;
		var fallback = [
			{ date: '2025-09-05T09:00:00', title: 'Science Fair', location: 'Main Hall' },
			{ date: '2025-09-12T16:00:00', title: 'Football Match', location: 'Athletic Field' },
			{ date: '2025-09-24T10:00:00', title: 'Arts Exhibition', location: 'Gallery' }
		];
		fetchJSONWithFallback('./assets/data/events.json', fallback).then(function (items) {
			container.innerHTML = '';
			items.slice(0, 6).forEach(function (item) {
				container.appendChild(renderEvent(item));
			});
		});
	}

	function renderEvent(item) {
		var li = document.createElement('li');
		var time = document.createElement('time');
		time.dateTime = item.date;
		try { time.textContent = new Date(item.date).toLocaleString(); } catch (e) { time.textContent = item.date; }
		var title = document.createElement('strong');
		title.textContent = item.title;
		var meta = document.createElement('p');
		meta.textContent = item.location ? ('Location: ' + item.location) : '';
		li.appendChild(time);
		li.appendChild(title);
		li.appendChild(meta);
		return li;
	}

	function setupNewsletterForm() {
		var form = document.getElementById('newsletter-form');
		var input = document.getElementById('newsletter-email');
		var message = document.getElementById('newsletter-error');
		if (!form || !input || !message) return;
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			var email = String(input.value || '').trim();
			var valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
			message.hidden = false;
			message.classList.remove('is-success');
			if (!valid) {
				message.textContent = 'Please enter a valid email address.';
				return;
			}
			message.textContent = 'Thanks for subscribing! Please check your inbox.';
			message.classList.add('is-success');
			form.reset();
		});
	}
})();
