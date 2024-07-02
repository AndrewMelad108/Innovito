<template>
  <header
    class="mt-6 mb-4 border grid-cols-2 grid justify-between items-center rounded-md bg-white p-2 shadow-md w-[85%] mx-auto"
  >
    <div class="relative border-white-dark/20 w-full flex">
      <button
        type="submit"
        placeholder="Let's find your question in fast way"
        class="text-primary m-auto p-3 flex items-center justify-center"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5 18.5L22 22"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
          <path
            d="M6.75 3.27093C8.14732 2.46262 9.76964 2 11.5 2C16.7467 2 21 6.25329 21 11.5C21 16.7467 16.7467 21 11.5 21C6.25329 21 2 16.7467 2 11.5C2 9.76964 2.46262 8.14732 3.27093 6.75"
            stroke="#1C274C"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Search"
        class="form-input border-0 placeholder:text-gray-400 placeholder:capitalize rounded-none bg-white focus:shadow-[0_0_5px_2px_rgb(194_213_255_/_62%)] dark:shadow-[#1b2e4b] placeholder:tracking-wider focus:outline-none py-3"
      />
    </div>
    <div class="icons justify-self-end flex items-center gap-2">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 8.00771C3 8.00771 5.93717 11 10.4372 11M21 8.00771C21 8.00771 19.0829 7.87029 16.5 8.75575C15.7031 9.02893 15.197 9.45084 14 10"
          stroke="#1C274C"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M2.99986 14.0077C2.99986 14.0077 3.7679 13.9572 5 14.1148M7.90309 14.7558C9.40057 15.2269 11.1719 17 14.5092 17C17.521 17 19.8903 15.871 21.27 15"
          stroke="#1C274C"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
          stroke="#1C274C"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 15.5524C18.8263 19.2893 15.3351 22 11.2108 22C6.12383 22 2 17.8762 2 12.7892C2 11.8169 2.15064 10.8798 2.42985 10M8.44759 4C7.15152 4.40707 5.9789 5.09291 5 5.98724"
          stroke="#1C274C"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M21.9131 9.94727C20.8515 6.14438 17.8556 3.14845 14.0527 2.0869C12.4091 1.6281 11 3.05419 11 4.76062V11.4551C11 12.3083 11.6917 13 12.5449 13H19.2394C20.9458 13 22.3719 11.5909 21.9131 9.94727Z"
          stroke="#1C274C"
          stroke-width="1.5"
        />
      </svg>
      <svg
        class="relative"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6V10"
          stroke="#1C274C"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M7.5 19C8.15503 20.7478 9.92246 22 12 22C12.2445 22 12.4847 21.9827 12.7192 21.9492M16.5 19C16.2329 19.7126 15.781 20.3428 15.1985 20.8393"
          stroke="#1C274C"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          d="M9 2.67366C9.90927 2.2417 10.9264 2 12.0001 2C15.8661 2 19.0001 5.13401 19.0001 9V9.7041C19.0001 10.5491 19.2502 11.3752 19.7189 12.0783L20.8675 13.8012C21.9166 15.3749 21.1157 17.5139 19.291 18.0116C14.5175 19.3134 9.48258 19.3134 4.70913 18.0116C2.88442 17.5139 2.08349 15.3749 3.13263 13.8012L4.28123 12.0783C4.74995 11.3752 5.00006 10.5491 5.00006 9.7041V9C5.00006 7.92638 5.24177 6.90921 5.67373 5.99994"
          stroke="#1C274C"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
      <span class="text-white bg-red-500 p-1 rounded-md absolute top-1 right-16"
        >234</span
      >
      <p
        class="w-8 h-8 p-2 rounded-full bg-primary flex items-center justify-center"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="6" r="4" stroke="white" stroke-width="1.5" />
          <path
            d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18"
            stroke="white"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </p>
    </div>
  </header>
</template>
